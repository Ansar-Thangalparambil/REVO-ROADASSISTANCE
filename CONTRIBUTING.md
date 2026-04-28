# Contributing to RoadAssist

Thank you for considering contributing to RoadAssist! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Follow project coding standards

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature
4. Make your changes
5. Test thoroughly
6. Submit a pull request

## Development Workflow

### Backend Development

1. **Create a new Django app** (if needed):
```bash
cd backend
python manage.py startapp app_name
```

2. **Add models**:
- Define models in `models.py`
- Create migrations: `python manage.py makemigrations`
- Apply migrations: `python manage.py migrate`

3. **Create serializers** in `serializers.py`

4. **Create views** in `views.py`

5. **Add URL routes** in `urls.py`

6. **Register in admin** in `admin.py`

7. **Write tests** in `tests.py`

### Frontend Development

1. **Create components** in `src/components/`

2. **Add pages** in `src/pages/`

3. **Define types** in `src/types/`

4. **Add API calls** in `src/api/`

5. **Style components** in `src/styles/`

## Coding Standards

### Python (Backend)

- Follow PEP 8
- Use type hints where possible
- Write docstrings for functions/classes
- Keep functions small and focused
- Use meaningful variable names

```python
def calculate_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """
    Calculate distance between two coordinates.
    
    Args:
        lat1: Latitude of first point
        lon1: Longitude of first point
        lat2: Latitude of second point
        lon2: Longitude of second point
        
    Returns:
        Distance in kilometers
    """
    # Implementation
    pass
```

### TypeScript (Frontend)

- Use TypeScript for all new code
- Define interfaces for all data structures
- Use functional components with hooks
- Follow React best practices
- Use meaningful component names

```typescript
interface ServiceCardProps {
  service: Service;
  onBook: (serviceId: string) => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
  // Implementation
}
```

### CSS

- Use BEM naming convention
- Keep selectors specific
- Use CSS variables for colors
- Mobile-first responsive design

```css
.service-card {
  /* Block */
}

.service-card__title {
  /* Element */
}

.service-card--featured {
  /* Modifier */
}
```

## Commit Messages

Follow conventional commits:

```
feat: add booking cancellation feature
fix: resolve payment processing bug
docs: update API documentation
style: format code with black
refactor: simplify booking state machine
test: add tests for user registration
chore: update dependencies
```

## Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all tests pass**
4. **Update README.md** if needed
5. **Request review** from maintainers

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] All tests passing

## Screenshots (if applicable)

## Checklist
- [ ] Code follows project style
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No new warnings
```

## Testing

### Backend Tests

```bash
# Run all tests
pytest

# Run specific test file
pytest backend/users/tests.py

# Run with coverage
pytest --cov=backend
```

### Frontend Tests

```bash
# Run tests (when implemented)
npm test

# Type check
npm run type-check
```

## Database Migrations

1. **Always review migrations** before committing
2. **Test migrations** on a copy of production data
3. **Write reversible migrations** when possible
4. **Document complex migrations**

## API Changes

When modifying APIs:

1. **Maintain backward compatibility** when possible
2. **Version breaking changes** (`/api/v2/`)
3. **Update API documentation**
4. **Notify frontend team**

## Questions?

- Open an issue for bugs
- Start a discussion for features
- Ask in Slack for quick questions

Thank you for contributing! 🎉
