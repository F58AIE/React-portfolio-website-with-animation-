package database

import (
	"fmt"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// DB holds the database connection
var DB *gorm.DB

// Connect initializes the database connection
func Connect() {
	database, err := gorm.Open(sqlite.Open("myprofile.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database!")
	}

	fmt.Println("Database connected successfully")
	DB = database
}
