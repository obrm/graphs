import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";


export default makeStyles((theme: Theme) => createStyles({	
  rootContainer: {
		marginTop: "60px",
	},
	gridCard: {
		height: "100%",
		position: "relative",
		"& .MuiCardContent-root": {
			height: "100%",
		},
	},
	activityCard: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	gridCartSubtitle: {
		fontSize: "14px",
		margin: "5px 0 0",
		color: "rgba(255,255,255,.5)",
	},
}));