import { z } from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(3, "Nome obrigatório"),
    birthDate: z.string().min(8, "Data inválida"),
    phone: z
        .string()
        .trim()
        .min(14, "Celular inválido, use o formato (99) 99999-9999")
        .max(15, "Celular inválido, use o formato (99) 99999-9999")
        .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Celular inválido, use o formato (99) 99999-9999"),
    email: z.string().email("Email inválido"),
    password: z
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
        .string()
        .min(6, "A confirmação de senha deve ter pelo menos 6 caracteres")
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
});

export type RegisterFormData = z.infer<typeof registerSchema>;