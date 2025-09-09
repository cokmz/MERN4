// RBAC middleware and config
const roles = {
  admin: {
    user: {
      create: ['serviceNo', 'password', 'role'], // can register new user
      read: ['serviceNo', 'password', 'role'],
      update: ['serviceNo', 'password', 'role'],
      delete: ['serviceNo', 'password', 'role']
    }
  },
  co: {
    user: {
      create: ['serviceNo', 'password', 'role'], // can register new user
      read: ['serviceNo', 'password', 'role'],
      update: ['serviceNo', 'password', 'role'],
      delete: ['serviceNo', 'password', 'role']
    }
  },
  ro: {
    user: {
      read: ['serviceNo', 'role']
    }
  },
  go: {
    user: {
      read: ['serviceNo', 'role']
    }
  },
  do: {
    user: {
      read: ['serviceNo', 'role']
    }
  },
  officer: {
    user: {
      read: ['serviceNo', 'role']
    }
  },
  sailor: {
    user: {
      read: ['serviceNo', 'role']
    }
  }
};

function checkPermission(role, resource, action, field) {
  const roleConfig = roles[role];
  if (!roleConfig) return false;
  const resourceConfig = roleConfig[resource];
  if (!resourceConfig) return false;
  const allowedFields = resourceConfig[action];
  if (!allowedFields) return false;
  if (field && !allowedFields.includes(field)) return false;
  return true;
}

function rbacMiddleware(resource, action, field) {
  return (req, res, next) => {
    const user = req.user; // Assume req.user is set by auth middleware
    if (!user || !checkPermission(user.role, resource, action, field)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}

module.exports = { rbacMiddleware, checkPermission, roles };
