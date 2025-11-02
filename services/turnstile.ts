import { validateTurnstileToken } from 'next-turnstile'

type Props = {
    token: string
}

export async function validateToken({ token }: Props) {
    try {
        const result = await validateTurnstileToken({
            token,
            secretKey: process.env.TURNSTILE_SECRET_KEY as string,
        })

        if (result.success) {
            return true
        }
    } catch (error) {
        console.error('Validation failed:', error)
    }
    return false
}
