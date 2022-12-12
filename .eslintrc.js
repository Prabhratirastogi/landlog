module.exports = {
    extends: ["next", "prettier", "next/core-web-vitals"],
    settings: {
        next: {
            rootDir: ["apps/*/", "packages/*/"],
        },
    },
}; 