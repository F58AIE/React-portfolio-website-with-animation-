package routes

import (
	"backend/handlers" // Use module name for local import
)
import "github.com/gofiber/fiber/v2"

func SetupRoutes(app *fiber.App)
    {
    app.Get("/api/profile", handlers.GetProfile)
    app.Get("/api/projects", handlers.GetProjects)
    app.Get("/api/contact", handlers.GetContact)
}
