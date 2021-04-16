import { useStyles } from './styles/Home';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker, } from "@material-ui/pickers";

function Home(): JSX.Element {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date: any) => {
        setSelectedDate(date);

        console.log(selectedDate);
    };


    return (
        <>
            <div className={classes.wrapperDiv} >
                <span className={classes.secondTitle}>ברוכים הבאים למחשבון לידה</span>
            </div>

            <div className={classes.inputsWrapperDiv}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <label className={classes.explainLabel}>הכניסי את תאריך הווסת האחרון (היום הראשון של הווסת האחרונה)</label>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        // label="הכניסי את תאריך הווסת האחרון (היום הראשון של הווסת האחרונה):"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        className={classes.datePickerDialog}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
        </>
    );
}

export { Home };