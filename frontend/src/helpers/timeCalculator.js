const timeCalculator = (date, setTime) => {
    // Update the elapsed time every minute
    const intervalId = setInterval(() => {
        // Get the current date and time
        const now = new Date();

        // Post Date
        //const postDate = new Date(date)

        // Calculate the difference in milliseconds between the current date/time and the post date/time
        const timeDiff = now.getTime() - date.getTime();

        // Convert the time difference to seconds, minutes, hours, days, etc. as needed
        const secondsDiff = Math.floor(timeDiff / 1000);
        const minutesDiff = Math.floor(timeDiff / 1000 / 60);
        const hoursDiff = Math.floor(timeDiff / 1000 / 60 / 60);
        const daysDiff = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

        // Choose the appropriate time unit to display
        let unit = '';
        let value = 0;
        if (daysDiff > 0) {
            unit = 'day';
            value = daysDiff;
        } else if (hoursDiff > 0) {
            unit = 'hour';
            value = hoursDiff;
        } else if (minutesDiff > 0) {
            unit = 'minute';
            value = minutesDiff;
        } else {
            unit = 'Just now';
            value = '';
        }

        // Add "s" to the end of the unit if the value is not 1
        if (value !== 1 && value !== '') {
            unit += 's';
        }
        // Add "ago" to the end of the unit if the value not " "
        if(value !== '') {
            unit += ' ago'
        }
        // Update the elapsed time state variable with the new value
        setTime(`${value} ${unit}`);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
}

export default timeCalculator