# Shop Back API

This project is a Django-based e-commerce application that provides an API for managing products and categories.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd shop-back
   ```

2. **Create a virtual environment:**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```
   pip install -r requirements.txt
   ```

4. **Apply migrations:**
   ```
   python manage.py migrate
   ```

5. **Run the development server:**
   ```
   python manage.py runserver
   ```

## Usage

The API provides the following endpoints:

- **Categories**
  - `GET /api/categories/` - List all categories
  - `POST /api/categories/` - Create a new category

- **Products**
  - `GET /api/products/` - List all products
  - `POST /api/products/` - Create a new product

## License

This project is licensed under the MIT License.