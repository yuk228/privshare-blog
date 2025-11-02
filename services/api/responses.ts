import { NextResponse } from 'next/server'

export interface Response<T> {
    data: T
}

export function Ok<T>(data: T): NextResponse<Response<T>> {
    return NextResponse.json({ data }, { status: 200 })
}

export function Created<T>(data: T): NextResponse<Response<T>> {
    return NextResponse.json({ data }, { status: 201 })
}

export function Updated<T>(data: T): NextResponse<Response<T>> {
    return NextResponse.json({ data }, { status: 200 })
}

export interface ErrorResponse {
    status: number
    message?: string
}

export function NotFound(): NextResponse<ErrorResponse> {
    return NextResponse.json(
        { status: 404, message: 'Resource Not Found' },
        { status: 404 }
    )
}

export function Unauthorized(): NextResponse<ErrorResponse> {
    return NextResponse.json(
        { status: 401, message: 'Unauthorized' },
        { status: 401 }
    )
}

export function Forbidden(): NextResponse<ErrorResponse> {
    return NextResponse.json(
        { status: 403, message: 'Forbidden' },
        { status: 403 }
    )
}

export function UnprocessableEntity(): NextResponse<ErrorResponse> {
    return NextResponse.json(
        { status: 422, message: 'Unprocessable Entity' },
        { status: 422 }
    )
}

export function InternalServerError(): NextResponse<ErrorResponse> {
    return NextResponse.json(
        { status: 500, message: 'Internal Server Error' },
        { status: 500 }
    )
}
