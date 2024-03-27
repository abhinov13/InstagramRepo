import { check } from "../DataSource/notification_datasource"

export const checkNotifications = async (username) => {
    try {
        const { data } = await check(username);
        console.log("Checked notifications for " + username);
        return { data: data, error: null };
    } catch (error) {
        console.log("Error occurred while checking notifications for " + username);
        console.log(error);
        return { data: null, error: error };
    }
}