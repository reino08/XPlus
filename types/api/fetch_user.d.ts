export interface FetchUser {
    fetchManyUsersByScreenName: (_: { screen_names: string[] }) => Promise<any>
    fetchOneUser: (_: { user_id: string }) => Promise<any>
    fetchOneUserByScreenName: (_: { screen_name: string }) => Promise<any>
    fetchUsers: (_: { user_id: string }) => Promise<any>
    fetchViewer: (_: { isDelegate: boolean }) => Promise<any>
    removeFollower: (_: { target_user_id: string }) => Promise<any>
}
