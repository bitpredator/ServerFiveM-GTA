

## Installation

- Modify your ESX config with `Config.Multichar = true`
- All owner and identifier columns should be set to `VARCHAR(60)` to ensure correct data entry
- The resource will attempt to set columns automatically

```lua
RegisterNetEvent('esx:playerLoaded', function(xPlayer)
 ESX.PlayerData = xPlayer
  ESX.PlayerLoaded = true
end)

RegisterNetEvent('esx:onPlayerLogout', function()
 ESX.PlayerLoaded = false
 ESX.PlayerData = {}
end)
```

### Notes

- Characters are stored in the users table as `char#:license` - if you need to use a different identifier then you need to modify ESX itself
- Character deletion does not require manual entries for the tables to remove
- As characters are stored with unique identifiers, there is no excessive queries being executed

##  Update 
-- inserted Italian language
-- modified config file to support the Italian language