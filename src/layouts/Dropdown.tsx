import React from "react";
import { Button, Box, Grow, Paper, Popper, MenuList } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { weekDropdown, statusDropdown } from "./DropdownItem";
import useDropdownItem from "../models/useDropdownItem";
import { RangeDateType } from "../models/useDropdownItem";

const dropdownHeight = "12rem";

export type DefaultProgressType = {
  all: string;
  active: string;
  closed: string;
};

const Dropdown = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const checkTab = window.location.href.includes("/ad");

  const { getRangeData, getProgressState } = useDropdownItem();
  const rangeValue :RangeDateType[] = getRangeData();
  const progressValue = getProgressState();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      //onClick 이벤트 핸들러 쿼리날리기
      //range = const url = "?date_gte=2022-02-01&date_lte=2022-02-07";
      //status = const url = "?status=active&status=closed";
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box
      style={{
        border: "1px solid #eeeeee",
        backgroundColor: "white",
        width: dropdownHeight,
      }}
    >
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{ width: "100%" }}
      >
        {checkTab ? `전체 광고` : `${rangeValue[0].start[1]}~${rangeValue[0].end[1]}`}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ width: dropdownHeight, overflowY: "auto" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{ height: "120px" }}
                >
                  {checkTab
                    ? Object.entries(progressValue).map(
                        statusDropdown(handleClose)
                      )
                    : rangeValue.map(weekDropdown(handleClose))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default Dropdown;
