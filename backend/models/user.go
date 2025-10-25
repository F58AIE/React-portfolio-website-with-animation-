package models

// User defines the structure of a user profile
type User struct {
	ID   uint   `json:"id"`   // optional: for database
	Name string `json:"name"` // user name
	Bio  string `json:"bio"`  // user biography
	Email string `json:"email,omitempty"` // optional email
}
