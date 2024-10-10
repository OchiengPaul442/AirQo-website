from functools import wraps


def with_author(func):
    """
    Decorator that automatically assigns an author (user) to the model.
    """
    @wraps(func)
    def wrapper(self, *args, **kwargs):
        if hasattr(self, 'author'):
            # Example: Set the author to the user if passed in kwargs
            self.author = kwargs.get('author', None)
        return func(self, *args, **kwargs)
    return wrapper
