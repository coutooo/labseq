# LabSeq

LabSeq is a robust sequencing application developed with Quarkus and Angular.

- n=0 => l(0) = 0
- n=1 => l(1) = 1
- n=2 => l(2) = 0
- n=3 => l(3) = 1
- n>3 => l(n) = l(n-4) + l(n-3)

## Getting Started

Follow these straightforward steps to set up and run LabSeq on your system.

### Prerequisites

Ensure that you have the following prerequisites installed on your machine:

- **Quarkus** - A Kubernetes Native Java framework
- **Angular** - A popular web application framework
- **Optional** - Docker, run.sh script uses docker-compose

### Installation

1. Clone the LabSeq repository to your local machine:

    ```bash
    git clone https://github.com/coutooo/labseq.git
    ```

2. Navigate to the project directory:

    ```bash
    cd labseq
    ```

3. Make the run script executable:

    ```bash
    chmod +x run.sh
    ```

### Usage

Run the application using the provided script:

```bash
./run.sh
```

This will start LabSeq, making it accessible through your preferred web browser at [http://localhost:4200/](http://localhost:4200/).

### REST API Documentation

The REST API documentation in Open API format (Swagger) is available at [http://localhost:8080/openapi](http://localhost:8080/openapi). Explore and understand the API endpoints for seamless integration.

### Contributing

We welcome contributions! If you'd like to enhance LabSeq, follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear and concise messages.
4. Push your branch to your fork.
5. Open a pull request on the LabSeq repository.
