package handlers

import (
	"github.com/gofiber/fiber/v2"
)

// Dummy profile data
var profileData = map[string]string{
	"name":  "AIE",
	"bio":   "Personal profile developer",
	"email": "aie@example.com",
}

// Dummy projects data
var projectsData = []map[string]string{
	{"title": "Project 1", "description": "Description for project 1"},
	{"title": "Project 2", "description": "Description for project 2"},
}

// Dummy contact data
var contactData = map[string]string{
	"email": "aie@example.com",
	"phone": "+973 12345678",
}

// GetProfile returns profile info as JSON
func GetProfile(c *fiber.Ctx) error {
	return c.JSON(profileData)
}

// GetProjects returns list of projects as JSON
func GetProjects(c *fiber.Ctx) error {
	return c.JSON(projectsData)
}

// GetContact returns contact info as JSON
func GetContact(c *fiber.Ctx) error {
	return c.JSON(contactData)
}
