import MenuItem from "@mui/material/MenuItem";
import { RangeDateType } from "../models/useDropdownItem";

//onClick -> query = "?date_gte=${week.start[0]}&date_lte=${week.end[0]}" 
export const weekDropdown = (handleClose: any) => {
  return (week: RangeDateType, index: number) => (
    <MenuItem
      sx={{ zIndex: 10, backgroundColor: "white" }}
      onClick={handleClose}
      key={index}
    >
      {week.start[1]} ~ {week.end[1]}
    </MenuItem>
  );
};

//onClick -> query = status[0] === "all" ? "?status=active&status=closed" : "?status=${status[0]}"
export const statusDropdown = (handleClose: any) => {
  return (status: [string,string], index: number) => (
    <MenuItem
      sx={{ zIndex: 10, backgroundColor: "white" }}
      onClick={handleClose}
      key={index}
    >
      {status[1]}
    </MenuItem>
  );
};
