# Configuration Store

## Description

Handles the functionality for loading a configuration file for the Python portion of the toolchain.
The configuration is stored as a YAML file with the following structure:

- **faktory-connection-info**: Information for connecting to a Faktory instance.
    - **port**: The port the Faktory instance can be found on.
    - **domain**: The domain the Faktory instance can be found at.
- **db-connection-info**: Information for connecting to a MongoDB instance.
    - **domain**: The domain the MongoDB instance can be found at.
    - **port**: The port the MongoDB instance can be found on.
    - **user**: The user to authenticate with against the MongoDB instance.
    - **password**: The password for the user.
    - **database**: The database to connect to in the MongoDB instance.
- **tangle-collections**: The collection information in the MongoDB database for the tangles.
    - **stencil_col_name**: The name of the collection of stencils.
    - **col_name**: The name of the collection of tangles
    - **page_size**: The number of tangles in a page.

## Implementation

<!-- prettier-ignore-start -->
::: runner.config_store
    :docstring: 
    :members:

<!-- prettier-ignore-end -->
