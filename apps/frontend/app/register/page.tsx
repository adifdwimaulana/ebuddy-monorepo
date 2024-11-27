"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Button,
  Container,
  TextField,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { RegisterUser } from "@/types";
import { registerUser } from "@/apis/user";
import { useSnackbar } from "@/contexts/snackbar-context";

export default function Register() {
  const [formData, setFormData] = useState<RegisterUser>({
    name: "",
    email: "",
    password: "",
    gender: "",
    address: "",
  });
  const router = useRouter();
  const { showSnackbar } = useSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const {
        data: { status, message },
      } = await registerUser(formData);

      if (status === "success") {
        showSnackbar(message, "success");
        router.push("/login");
      } else {
        throw new Error("Failed to register user");
      }
    } catch (error: any) {
      console.error(error);
      showSnackbar(`Failed to login ${error.message}`, "error");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            select
            name="gender"
            label="Gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            id="address"
            multiline
            rows={3}
            value={formData.address}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Link href="/login">{"Already have an account? Sign In"}</Link>
        </Box>
      </Box>
    </Container>
  );
}
