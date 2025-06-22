import { Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DataGrid } from "@mui/x-data-grid";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export default function MyPage() {
  return (
    <>
      <Button variant="contained">Click</Button>
      <TextField label="Name" />
      <DatePicker label="Pick a date" />
      <AccessAlarmIcon />
    </>
  );
}
