// permission.js - 用户权限管理模块

import { supabase } from "../utils/supabaseClient.js";

/**
 * 获取当前登录用户的 profile
 * @returns {Promise<{role: string, name: string, id: string}>}
 */
export async function getCurrentUserProfile() {
    const {
        data: { user },
        error: userError
    } = await supabase.auth.getUser();

    if (userError || !user) {
        throw new Error("未登录用户");
    }

    const { data: profiles, error: profileError } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (profileError) {
        throw new Error("无法获取用户 profile");
    }

    return profiles;
}

/**
 * 判断当前用户是否具备指定角色
 * @param {string[]} allowedRoles - 允许访问的角色列表
 * @returns {Promise<boolean>}
 */
export async function hasPermission(allowedRoles = []) {
    try {
        const profile = await getCurrentUserProfile();
        return allowedRoles.includes(profile.role);
    } catch (error) {
        console.warn(error.message);
        return false;
    }
}
