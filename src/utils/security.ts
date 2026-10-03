/**
 * @license
 * Grupo Integral - Soluciones y Desarrollo
 * Módulo de Seguridad por Diseño (SSD) alineado a ISO/IEC 27034
 * Enforces strict input validation, sanitization, XSS mitigation, and rate limiting.
 */

import { ContactFormData, FormValidationErrors } from '../types';

/**
 * Sanitizes user input string against HTML/Script injection attacks
 * ISO/IEC 27034 Application Security Control (ASC-01: Input Neutralization)
 */
export function sanitizeString(input: string, maxLength: number = 500): string {
  if (!input) return '';
  
  // Truncate to maximum permissible length to prevent memory exhaustion
  const truncated = input.slice(0, maxLength);
  
  // Neutralize common XSS vectors and strip dangerous tags
  return truncated
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .replace(/[&<>"'/]/g, (match) => {
      const entities: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
      };
      return entities[match] || match;
    })
    .trim();
}

/**
 * Validates email format according to RFC 5322 strict subset
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates international/national phone number format
 */
export function validatePhone(phone: string): boolean {
  // Accepts standard 10 digit, +52, spaces, hyphens, and parenthesis
  const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}$/;
  return phoneRegex.test(phone.trim().replace(/\s+/g, ''));
}

/**
 * SSD ISO/IEC 27034 Comprehensive Contact Form Validator
 */
export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: FormValidationErrors;
  sanitizedData: ContactFormData;
} {
  const errors: FormValidationErrors = {};

  // Honeypot detection (Anti-Bot Control)
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.general = 'Petición rechazada por políticas de seguridad automatizadas.';
    return {
      isValid: false,
      errors,
      sanitizedData: data,
    };
  }

  // Name validation
  const cleanName = sanitizeString(data.fullName, 100);
  if (!cleanName || cleanName.length < 3) {
    errors.fullName = 'Por favor ingrese un nombre completo válido (mínimo 3 caracteres).';
  } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.]+$/.test(cleanName)) {
    errors.fullName = 'El nombre contiene caracteres especiales no válidos.';
  }

  // Email validation
  const cleanEmail = sanitizeString(data.email, 120);
  if (!cleanEmail || !validateEmail(cleanEmail)) {
    errors.email = 'Por favor ingrese una dirección de correo corporativo válida.';
  }

  // Phone validation
  const cleanPhone = sanitizeString(data.phone, 25);
  if (!cleanPhone || !validatePhone(cleanPhone)) {
    errors.phone = 'Por favor ingrese un teléfono válido de 10 dígitos.';
  }

  // Message validation
  const cleanMessage = sanitizeString(data.message, 1500);
  if (!cleanMessage || cleanMessage.length < 10) {
    errors.message = 'Por favor incluya un resumen de su proyecto o requerimiento (mínimo 10 caracteres).';
  }

  const sanitizedData: ContactFormData = {
    fullName: cleanName,
    email: cleanEmail,
    phone: cleanPhone,
    company: sanitizeString(data.company, 100),
    serviceInterest: data.serviceInterest,
    estimatedBudget: sanitizeString(data.estimatedBudget, 50),
    message: cleanMessage,
    honeypot: '',
  };

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData,
  };
}

/**
 * Client-side Rate Limiter to prevent submission flooding
 * Enforces cooldown between dispatch requests
 */
class ClientRateLimiter {
  private lastSubmissionTime: number = 0;
  private submissionAttempts: number = 0;
  private readonly cooldownMs = 8000; // 8 seconds cooldown

  public canSubmit(): { allowed: boolean; waitTimeSeconds: number } {
    const now = Date.now();
    const elapsed = now - this.lastSubmissionTime;

    if (elapsed < this.cooldownMs && this.submissionAttempts > 0) {
      const waitTimeSeconds = Math.ceil((this.cooldownMs - elapsed) / 1000);
      return { allowed: false, waitTimeSeconds };
    }

    this.lastSubmissionTime = now;
    this.submissionAttempts++;
    return { allowed: true, waitTimeSeconds: 0 };
  }

  public reset(): void {
    this.submissionAttempts = 0;
  }
}

export const submissionRateLimiter = new ClientRateLimiter();
