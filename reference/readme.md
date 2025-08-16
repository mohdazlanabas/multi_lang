# Web Powered by Every Language

This project is a demonstration of microservices implemented in various programming languages, all orchestrated using Docker Compose. The goal is to showcase how different language-specific services can coexist and communicate within a single application, serving dynamic content to a simple web frontend.

## Project Structure

The project is organized as follows:

- **`docker-compose.yml`**: Defines and configures the multi-service application. Each service corresponds to a different programming language.
- **`frontend/`**: Contains the web interface for the application.
    - `index.html`: The main HTML file that structures the web page.
    - `script.js`: Fetches messages from each language-specific backend service and dynamically displays them. It also attempts to load and display code snippets for each service.
    - `style.css`: Provides basic styling for the web interface.
    - `snippets/`: Contains text files with code snippets for each language, which are displayed in the frontend when the "Show Code" button is clicked.
- **Language-Specific Service Directories (e.g., `python_service/`, `node_service/`, `go_service/`, etc.)**: Each directory contains:
    - `Dockerfile`: Defines the Docker image for the respective service, including its dependencies and how to run the application.
    - `[language]_service.[ext]`: The source code for the microservice, typically a simple HTTP server that returns a message.
- **`start_all.sh`**: A convenience script to build and run all Docker services.
- **`slf4j-simple.jar` and `spark-core.jar`**: These appear to be related to Java/Kotlin services, likely dependencies for the Kotlin service.

## How it Works

1.  **Docker Compose**: The `docker-compose.yml` file sets up multiple independent services, each running in its own Docker container. Each service is built from a `Dockerfile` located in its respective language directory.
2.  **Backend Services**: Each language-specific service (e.g., `python_service.py`, `node_service.js`) is a simple web server listening on a specific port (e.g., 9001 for Python, 9002 for JavaScript). When accessed, they return a string message indicating the language.
3.  **Frontend**: The `frontend/script.js` makes `fetch` requests to each of these backend services (e.g., `http://localhost:9001/python`, `http://localhost:9002/javascript`).
4.  **Dynamic Content**: The messages received from the backend services are then displayed on the `index.html` page.
5.  **Code Snippets**: The frontend also attempts to load and display code snippets from the `frontend/snippets/` directory, allowing users to view the source code of each service directly in the browser.

---

## Detailed Overview & Example Service Implementations

This project is a polyglot microservices demo, showing how you can run and interact with services written in many different languages, all at once, using Docker. The frontend brings all the responses together, and you can view both the output and the code for each service.

### Example Service Implementations

- **Python (`python_service.py`)**: Uses Flask to serve `/python` and returns "Package Being Served From Python".
- **Node.js (`node_service.js`)**: Uses the built-in HTTP module to serve `/javascript` and returns "Package Being Served From JavaScript".
- **Go (`go_service.go`)**: Uses the net/http package to serve `/go` and returns "Package Being Served From Go".
- **Dart (`dart_service.dart`)**: Uses the `dart:io` library to serve `/dart` and returns "Package Being Served From Dart".
- **Rust (`rust_service.rs`)**: Uses low-level TCP sockets to serve HTTP responses on `/` and returns "Package Being Served From Rust".
- **C/C++ (`c_service.c`, `cpp_service.cpp`)**: Use sockets to serve HTTP responses on `/` and return a message indicating the language.
- **C# (`csharp_service.cs`)**: Uses `HttpListener` to serve `/csharp` and returns "Package Being Served From C#".
- **Ruby (`ruby_service.rb`)**: Uses Sinatra to serve `/ruby` and returns "Package Being Served From Ruby!".

### How to Run

1. **Install Docker and Docker Compose.**
2. **From the project root, run:**
   ```bash
   docker-compose up --build -d
   ```
3. **Access each service at its respective URL (e.g., http://localhost:9001/python).**
4. **Open `frontend/index.html` in your browser to see the unified frontend.**
4a. Fo To The Frontend and run the python localhost app: python3 -m http.server 8000
5. **To stop everything, run:**
   ```bash
   docker-compose down
   ```

---

## Supported Languages

This project includes backend services for the following programming languages:

-   Python
-   JavaScript (Node.js)
-   Dart
-   Go
-   Rust
-   C
-   C++
-   C#
-   Ruby
-   Kotlin

## Getting Started

To run this project, you will need Docker and Docker Compose installed on your system. Refer to the `run.txt` file for detailed instructions on how to set up and run the application.
