"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Container, TextField, Typography, Box } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";
import { setAuth } from "@/store/authSlice";
import { useSnackbar } from "@/contexts/snackbar-context";
import { useAppDispatch } from "@/hooks/useRedux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { showSnackbar } = useSnackbar();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        const { token } = await user.getIdTokenResult();
        dispatch(setAuth({ isAuthenticated: true, accessToken: token }));
        localStorage.setItem("accessToken", token);
        localStorage.setItem("isAuthenticated", "true");

        router.push("/");
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link href="/register">{"Don't have an account? Sign Up"}</Link>
        </Box>
      </Box>
    </Container>
  );
}
