# esx_addoninventory

## Installation
- Put it in the `[esx]` directory
- Import `esx_addoninventory.sql` in your database
- Add this in your `server.cfg`:

```
start esx_addoninventory
```

### `addon_inventory` database information
An addon inventory must be configured in the database before using it. Don't forget to run a server restart afterwards (you can alternative restart the script and relog all clients)

| `name`   | `label` | `shared` |
| -------- | ------- | -------- |
| name of the inventory | label of the inventory (not used) | is the inventory shared with others? (boolean either `0` or `1`) |

```lua
TriggerEvent('esx_addoninventory:getSharedInventory', 'society_police', function(inventory)
	inventory.addItem('bread', 1)
end)

TriggerEvent('esx_addoninventory:getInventory', 'property', 'steam:0123456789', function(inventory)
	inventory.removeItem('water', 1)
end)

```