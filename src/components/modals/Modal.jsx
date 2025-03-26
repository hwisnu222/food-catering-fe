import { Close } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Modal as MuiModal,
  Stack,
  Typography,
  Button,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  borderRadius: "0.3rem",
};

export default function Modal(props) {
  const { children, open, onClose, onSubmit } = props;

  return (
    <MuiModal open={open}>
      <Box sx={style}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
        >
          <Typography fontWeight={700} fontSize="1.2rem">
            {props.title}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Stack>
        <Box padding={2}>{children}</Box>
        {onSubmit && (
          <Stack padding={2} gap={2} direction="row" justifyContent="end">
            <Button onClick={onClose} color="inherit">
              Cancel
            </Button>
            <Button variant="contained" size="large" onClick={onSubmit}>
              Save
            </Button>
          </Stack>
        )}
      </Box>
    </MuiModal>
  );
}
