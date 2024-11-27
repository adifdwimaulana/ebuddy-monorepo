"use client";

import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import { AppDispatch, RootState } from "@/store/store";
import { fetchUser, updateUser } from "@/store/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { clearAuth } from "@/store/authSlice";
import { useRouter } from "next/navigation";
import { User } from "types";

export function UserForm() {
  const dispatch = useAppDispatch<AppDispatch>();
  const {
    data: user,
    status,
    error,
  } = useAppSelector((state: RootState) => state.user);
  const [formData, setFormData] = useState<User>({
    id: "",
    name: "",
    email: "",
    gender: "",
    address: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFetchUser = () => {
    dispatch(fetchUser());
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(updateUser(formData));
    dispatch(fetchUser());
  };

  const handleLogout = () => {
    dispatch(clearAuth());
    router.push("/login");
  };

  if (status === "loading") {
    return <CircularProgress />;
  }

  if (status === "error") {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box component="form" onSubmit={handleUpdateUser} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            disabled
            id="email"
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="gender"
            label="Gender"
            name="gender"
            select
            value={formData.gender}
            onChange={handleInputChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            multiline
            rows={3}
            value={formData.address}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Update User
      </Button>
      <Button
        fullWidth
        variant="outlined"
        onClick={handleFetchUser}
        sx={{ mt: 1, mb: 2 }}
      >
        Fetch User Data
      </Button>
      <Button
        fullWidth
        color="error"
        variant="contained"
        onClick={handleLogout}
        sx={{ mt: 1, mb: 2 }}
      >
        Logout
      </Button>
    </Box>
  );
}
