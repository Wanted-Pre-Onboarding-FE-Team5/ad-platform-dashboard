import React from "react";
import { Button, Box, Grow, Paper, Popper, MenuList } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { dateRange } from "../store/dateAtom";
import { progressState } from "../store/statusAtom";
import { useRecoilValue } from "recoil";
import { weekDropdown, statusDropdown } from "./DropdownItem";
import { DefaultDateType } from "../store/dateAtom";

const dropdownHeight = "12rem";

export type DefaultProgressType = {
  all: string;
  active: string;
  closed: string;
};

const Dropdown = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const rangeValue: DefaultDateType[] = useRecoilValue(dateRange);
  const progressValue : DefaultProgressType = useRecoilValue(progressState);
  const checkTab = window.location.href.includes("/ad"); //광고관리=true,대시보드=false

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
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
        {checkTab ? `전체 광고` : `${rangeValue[0].start}~${rangeValue[0].end}`}
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
                    ? Object.values(progressValue).map(statusDropdown(handleClose))
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
