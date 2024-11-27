"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { UserForm } from "@/components/UserForm";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <ProtectedRoute>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          User Management
        </Typography>
        <UserForm />
      </Container>
    </ProtectedRoute>
  );
}
