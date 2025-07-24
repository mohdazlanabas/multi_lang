=============================
Multi-Language Web Showcase
=============================

This project demonstrates how various programming languages can each serve a simple HTTP endpoint
that is accessed by a unified HTML/JavaScript frontend.

---------
Structure
---------
- /frontend          => Contains HTML/CSS/JS files
- /services          => Source code for each language backend
- /<lang>_service/   => Individual Dockerfiles for each backend

------------------------
How To Run (Step by Step)
------------------------

1. Install Docker and Python 3
   https://www.docker.com/products/docker-desktop
   https://www.python.org/

2. Serve the frontend
   cd frontend
   python3 -m http.server 8000

3. Visit http://localhost:8000 in your browser

4. Build and run each backend (examples):
   cd python_service
   docker build -t python_service .
   docker run -p 9001:9001 python_service

   cd ../node_service
   docker build -t node_service .
   docker run -p 9002:9002 node_service

   (Repeat for each language...)

5. Alternatively use docker-compose
   docker-compose up

----------------
Extra Files
----------------
- docker-compose.yml : template included
- start_all.sh       : lists all endpoints
- Each backend returns text like:
  "Hello World from Python"

Enjoy exploring how the web can be powered by every language!
