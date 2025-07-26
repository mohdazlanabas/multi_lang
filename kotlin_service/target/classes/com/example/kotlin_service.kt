package com.example

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.http.HttpHeaders

fun main() {
    embeddedServer(Netty, port = 9011) {
        routing {
            get("/kotlin") {
                call.response.headers.append(HttpHeaders.AccessControlAllowOrigin, "*")
                call.respondText("Package Being Served From Kotlin!")
            }
        }
    }.start(wait = true)
}
