package org.example;

public class PermissionManager {
    private PermissionLevel mCurrentLevel = PermissionLevel.USER;
    public String getRoleName() {
        return mCurrentLevel.name().toString();
    }
    public void setRoleName(PermissionLevel level) {
        mCurrentLevel = level;
    }
}