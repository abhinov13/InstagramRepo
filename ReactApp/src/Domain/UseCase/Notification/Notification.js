import { checkNotifications } from "../../../Data/Repository/notification_repository"

export const CheckNotifications = () => {
    return {
        execute: async (username) => {
            const { data, error } = await checkNotifications(username);
            return { data, error };
        }
    }
}