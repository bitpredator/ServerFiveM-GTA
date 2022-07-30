# esx_addonaccount


## Installation
- Put it in the `[essentials]` directory
- Import `esx_addonaccount.sql` in your database
- Add this in your `server.cfg`:

```
start esx_addonaccount
```

### `addon_account` database information
An addon account must be configured in the database before using it. Don't forget to run a server restart afterwards (you can alternative restart the script and relog all clients)

| `name`   | `label` | `shared` |
| -------- | ------- | -------- |
| name of the account | label of the account (not used) | is the account shared with others? (boolean either `0` or `1`) |

```lua
TriggerEvent('esx_addonaccount:getSharedAccount', 'society_realestateagent', function(account)
	account.addMoney(500)
end)

TriggerEvent('esx_addonaccount:getAccount', 'property_black_money', 'steam:0123456789', function(account)
	account.removeMoney(500)
end)
```