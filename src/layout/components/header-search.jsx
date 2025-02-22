import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import LocationIcon from "../../assets/svg-components/location-icon";
import SearchIcon from "../../assets/svg-components/search-icon";

const HeaderSearch = () => {
  return (
    <Stack direction={"row"} gap={"60px"} flexGrow={1} alignItems={"center"}>
      <Link>
        <img src={logo} alt="img" />
      </Link>
      <Stack alignItems={"center"} direction={"row"}>
        <IconButton>
          <LocationIcon />
        </IconButton>
        <Typography>Алматы</Typography>
      </Stack>
      <Stack flexGrow={1}>
        <TextField
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment sx={{ mb: "12px" }}>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
          placeholder="Поиск по товарам"
        />
      </Stack>
    </Stack>
  );
};

export default HeaderSearch;
