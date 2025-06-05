"use server"

import { LoginFormValues } from "@/components/auth/Login";
import { RegisterFormValues } from "@/components/auth/Signup";
import { auth } from "@/lib/auth";
import { APIError } from "better-auth/api";

export async function registerUser(data: RegisterFormValues) {
    try {
        await auth.api.signUpEmail({
            body: {
                email: data.email,
                password: data.password,
                name: `${data.firstName} ${data.lastName}`,
                firstName: data.firstName,
                lastName: data.lastName
            },
        });
        return {
            success: true,
            data: data,
            error: null
        }
    } catch (error){
        console.log(error)
        if (error instanceof APIError) {
            console.log(error.message, error.status)
            if (error.status === "UNPROCESSABLE_ENTITY") {
                return {
                    success: false,
                    data: null,
                    error: error.message,
                    status: error.status
                }
            }
        }     
        return {
            success: null,
            data: null,
            error: "Something went wrong"
        }
    }
}

export async function loginUser(data: LoginFormValues) {
    try {
        await auth.api.signInEmail({
            body: {
                email: data.email,
                password: data.password,
            },
        })
        return {
            success: true,
            data: data,
            error: null
        }
    } catch (error){
        if (error instanceof APIError) {
            console.log(error.message, error.status)
            if (error.status === "UNAUTHORIZED") {
                return {
                    success: false,
                    data: null,
                    error: error.message,
                    status: error.status
                }
            }
        }         
        return {
            success: false,
            data: null,
            error: "Something went wrong"
        }
    }
}