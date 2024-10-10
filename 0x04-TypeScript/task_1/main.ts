interface Teacher {
    readonly firstName: string;  // Can only be set during initialization
    readonly lastName: string;   // Can only be set during initialization
    fullTimeEmployee: boolean;   // Must always be defined
    yearsOfExperience?: number;  // Optional attribute
    location: string;            // Must always be defined
    [key: string]: any;          // Allows adding any additional attributes dynamically
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
