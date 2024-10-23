#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from pathlib import Path

# Define BASE_DIR as two levels up, pointing to the project root
BASE_DIR = Path(__file__).resolve().parent.parent

# Add BASE_DIR to sys.path so that 'backend' and other modules can be found
sys.path.append(str(BASE_DIR))


def main():
    """Run administrative tasks."""
    # Ensure DJANGO_SETTINGS_MODULE points to 'backend.settings'
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
