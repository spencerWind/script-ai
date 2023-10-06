class DateTimeUtils {
    static getCurrentDateTime() {
        return new Date();
    }

    // returns a given date as a string
    static getCurrentFormattedDate() {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date();
        return date.toLocaleDateString(undefined, options);
    }

    // returns number of days from the start of the month
    static getDaysSinceStartOfMonth() {
        let currentDate = DateTimeUtils.getCurrentDateTime();
        return currentDate.getDate();
    }

    // returns number of days from now until end of the month
    static getDaysUntilEndOfMonth() {
        const currentDate = DateTimeUtils.getCurrentDateTime();
        const lastDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            1
        );
        const daysUntilEndOfMonth = Math.floor(
            (lastDayOfMonth - currentDate) / (1000 * 3600 * 24)
        );
        return daysUntilEndOfMonth;
    }

    static getDaysInCurrentMonth() {
        const currentDate = DateTimeUtils.getCurrentDateTime();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const daysInCurrentMonth = new Date(year, month, 0).getDate();
        return daysInCurrentMonth;
    }

    static getWeeksInCurrentMonth() {
        const currentDate = DateTimeUtils.getCurrentDateTime();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const lastDayOfMonth = new Date(year, month, 0).getDate();
        const weeksInCurrentMonth = Math.ceil(lastDayOfMonth / 7);
        return weeksInCurrentMonth;
    }

    static getCurrentWeekInCurrentMonth() {
        const currentDay = DateTimeUtils.getDaysSinceStartOfMonth()
        const currentWeek = Math.ceil(currentDay / 7)
        return currentWeek
    }
}

export default DateTimeUtils;

// console.log(DateTimeUtils.getCurrentWeekInCurrentMonth())
