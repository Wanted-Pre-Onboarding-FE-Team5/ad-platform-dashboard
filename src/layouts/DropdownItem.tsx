import MenuItem from "@mui/material/MenuItem";
import { DefaultDateType } from "../store/dateAtom";

export const weekDropdown = (handleClose: any) => {
  return (week: DefaultDateType, index: number) => (
    <MenuItem
      sx={{ zIndex: 10, backgroundColor: "white" }}
      onClick={handleClose}
      key={index}
    >
      {week.start} ~ {week.end}
    </MenuItem>
  );
};

export const statusDropdown = (handleClose: any) => {
  return (status: string, index: number) => (
    <MenuItem
      sx={{ zIndex: 10, backgroundColor: "white" }}
      onClick={handleClose}
      key={index}
    >
      {Object.values(status)}
    </MenuItem>
  );
};
