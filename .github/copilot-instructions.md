# GitHub Copilot Instructions

This file provides guidance to GitHub Copilot when working with code in this repository.

## Project Overview

This is EnergyComponents (EC) application - a Java enterprise application using Maven for build management. The project follows a modular architecture with multiple Maven modules for different functional areas.

## Build System and Commands

This is a Maven-based Java project using Java 21. Key commands:

- `mvn clean install` - Full build and install to local repository
- `mvn clean install -DskipTests` - Build without running tests
- `mvn clean compile` - Compile all modules
- `mvn test` - Run unit tests
- `mvn verify` - Run integration tests (failsafe plugin)
- `mvn versions:set -DnewVersion=<version>` - Update version across all modules

## Architecture Overview

The application is structured as a multi-module Maven project with the following main components:

### Core Application Modules
- **ec-app** - Main EAR (Enterprise Archive) packaging module that bundles all components
- **ec-web** - WAR (Web Archive) module containing the web application layer using JSF/PrimeFaces

### Framework Modules (frmw-*)
- **frmw-core** - Core framework functionality and APIs
- **frmw-config** - Configuration management framework
- **frmw-rest-api** - RESTful API framework with demo client
- **frmw-graphql** - GraphQL API support
- **frmw-jbpm** - Business Process Management using jBPM
- **frmw-report** - Reporting framework using JasperReports
- **frmw-pf** & **frmw-pf-jsf** - PrimeFaces integration and JSF components
- **frmw-calc** - Calculation engine framework
- **frmw-ecis** - Energy Component Information System integration
- **frmw-ecra** - Energy Component Regulatory Affairs framework
- **frmw-mhm** - Material Handling Management
- **frmw-commons** - Common utilities and shared components
- **frmw-jakarta-compatibillity** - Jakarta EE compatibility layer

### Business Domain Modules
- **prod** - Production management
- **chem** - Chemistry/Chemical management
- **revn** - Revenue management
- **sale** - Sales management
- **tran** - Transaction management

### Supporting Modules
- **database** - Database schemas, migrations, and Docker setup
- **ectestautomation** - Test automation framework with performance testing
- **extensions** - Extension points and plugin architecture
- **tools** - Development tools and Maven plugins
- **distribution** - Distribution and packaging
- **documentation** - Project documentation

## Technology Stack

- **Java**: 21 (compilation and runtime)
- **Application Server**: WildFly 36.0.1.Final
- **Authentication**: Keycloak 26.3.2
- **UI Framework**: JSF with PrimeFaces 13.0.10 and OmniFaces 4.3
- **Charts**: Highcharts 11.2.0
- **Reporting**: JasperReports 6.21.4 and 7.0.1
- **BPM**: jBPM 7.74.1.Final with Kie 8.43.0.Final
- **Testing**: JUnit 5, JMockit 1.43, DBUnit 2.6.0
- **Database Migration**: Flyway 11.8.2
- **Build Analysis**: SpotBugs for static analysis

## Development Notes

- The project uses revision-based versioning (`${revision}` property)
- Current version: 14.2.2-SNAPSHOT
- Uses Jakarta EE instead of legacy Java EE
- Docker support available for database and testing environments
- Extensive use of Maven BOM (Bill of Materials) for dependency management
- Integration with AWS ECR for Docker registry (ap-south-1 region)

## Architecture Patterns

### Core Patterns
- **Multi-Layered Modular Architecture**: Framework layer (frmw-*), Business domain layer, Presentation layer (JSF/PrimeFaces), Integration layer (REST/GraphQL), Data layer
- **Service Provider Pattern**: Priority-based pluggable services for caching, notifications, secrets management (frmw-core)
- **Dependency Injection**: Jakarta CDI with @Named beans, @ViewScoped for state management
- **Repository/DAO Pattern**: Domain managers and DAO helpers for data access abstraction

### Integration Patterns
- **RESTful APIs**: JAX-RS controllers with OpenAPI standards, HATEOAS links, pagination
- **Event-Driven Architecture**: WebSocket channels, event monitoring, business process integration
- **BPM Integration**: jBPM workflows for business process orchestration (frmw-jbpm)
- **Message Handling**: Enterprise messaging framework (frmw-mhm) for external system integration

### Security Patterns
- **RBAC with OAuth2/OIDC**: Keycloak integration, multiple authentication strategies (Basic, SPNEGO, OIDC)
- **Secrets Management**: Pluggable providers (AWS Secrets Manager, Azure Vault, Kubernetes, File-based)

### UI Patterns
- **MVC with JSF**: Managed beans (@Named) as controllers, XHTML Facelets as views
- **Component-Based**: Reusable PrimeFaces components, custom screenlets, template inheritance

## Data Models

### Core Framework Models
- **Entity Interface** (`frmw-core/frmw-core-base/.../Entity.java`) - Main domain entity abstraction with key types (PK/LK/QK), attributes, relations, and data access
- **DomainEntity** - Concrete entity implementation with caching and lazy loading
- **Key Types**: Primary Key (PK), Logical Key (LK), Query Key (QK)

### Configuration Models (frmw-core)
- **ClassCnfg** - Entity class metadata (className, classType, appSpaceCntx, dbObjectName)
- **ClassAttributeCnfg** - Attribute configurations and metadata
- **ClassRelCnfg** - Inter-class relationship definitions
- **ClassPropertyCnfg** - Entity property configurations
- **ClassDependencyCnfg** - Class dependency mappings
- **Groups** - Group model hierarchies and access control

### Business Domain Models
- **Revenue (revn)**:
  - **StreamItem** - Production stream with field/well/product/company associations, units, calculations
  - **SourceMapping** - Cost allocation and journal mapping
  - **DataFilterParameterValueInfo** - Query filtering parameters

- **Message Handling (frmw-mhm)**:
  - **MessageDefinitionEntity** - External integration message definitions
  - **MessageFormatEntity** - Message format specifications
  - **RecipientEntity** - Message distribution recipients

- **Business Process (frmw-jbpm)**:
  - **TaskEntity** - Workflow task definitions
  - **ProcessInstanceStateEntity** - Process execution states

### Entity Patterns
- **Versioned Entities** - Support for temporal data with start/end dates
- **Coded Entities** - Standard object_id/code/name pattern
- **Audited Entities** - Created/updated by/date tracking
- **Hierarchical Models** - Group models with parent/child relationships

## Testing

- Unit tests use JMockit with Java agent: `-javaagent:...jmockit-${version}.jar`
- Integration tests run with UTC timezone: `-Duser.timezone=UTC`
- Performance testing available in `ectestautomation/ectest-performance`
- Test automation covers ECIS integration and other modules

## Authentication & Security

### Authentication Architecture
- **Primary Authentication**: Keycloak 26.3.2 with OAuth2/OIDC
- **Security Domain**: `energyx` realm configured in WildFly
- **Security Context**: `frmw-core/frmw-core/src/main/java/com/ec/eccore/util/security/AuthHelper.java`

### Authentication Strategies
- **Client Credentials** (`AuthenticatorFactory.java:8`): Service-to-service authentication using client ID and secret
- **Resource Owner Password** (`AuthenticatorFactory.java:12`): Username/password authentication with client credentials
- **Authorization Code Flow**: Web browser-based OIDC authentication
- **Basic Authentication**: HTTP Basic auth for legacy systems
- **SPNEGO**: Kerberos/Windows integrated authentication
- **Form Authentication**: Traditional form-based login

### Key Authentication Components
- **AuthHelper** (`frmw-core/frmw-core/src/main/java/com/ec/eccore/util/security/AuthHelper.java`): Central authentication utilities
- **AuthenticatorFactory** (`frmw-core/frmw-core-api/src/main/java/com/ec/frmw/rest/client/auth/AuthenticatorFactory.java`): Factory for authentication strategies
- **OIDCConfigurationInjectorListener** (`frmw-core/frmw-core/src/main/java/com/ec/eccore/util/security/oidcconfiginjector/OIDCConfigurationInjectorListener.java`): Dynamic OIDC configuration
- **KeycloakClientManager** (`frmw-core/frmw-core/src/main/java/com/ec/eccore/util/keycloak/KeycloakClientManager.java`): Keycloak admin client management

### Client Configurations
- **ecworker**: Primary service account client
- **analytics-manager-client**: Analytics service authentication
- **bpm-client**: Business process management authentication
- **jasper-client**: Reporting service authentication
- **energyx-client**: Web application client (public client)

### Security Configuration Files
- **Web Security**: `ec-web/src/main/webapp/WEB-INF/jboss-web.xml` (security-domain: energyx)
- **Authentication Audit**: `ec-web/src/main/webapp/com.ec.frmw.co.screens/authentication_audit.xhtml`
- **REST API Auth**: `frmw-rest-api/frmw-rest-api-web/src/main/java/com/ec/frmw/rest/v1/auth/`

## Coding Guidelines

- Follow existing code conventions and patterns found in the codebase
- Use Jakarta EE annotations instead of legacy Java EE
- Maintain consistency with existing module structure and naming conventions
- Implement proper error handling and logging
- Follow security best practices, especially around authentication and authorization
- Use the established testing patterns with JMockit and JUnit 5
- Respect the multi-layered architecture and module boundaries

## Special Files

- `IntegrateDatabaseToApplication.txt` - Instructions for database integration workflow
- `Jenkinsfile*` - CI/CD pipeline definitions for different environments
- `crlf-fix.sh` - Line ending normalization script