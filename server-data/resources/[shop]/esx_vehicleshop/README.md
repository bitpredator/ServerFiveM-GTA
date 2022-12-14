# esx_vehicleshop

ESX Vehicle Shop adds an vehicle shop to the game, where employeed players can sell vehicles to other players. You can also disable the job part so any player can buy vehicles with a menu based interaction.

## Requirements

* Auto mode (everyone can buy vehicles from the dealer)
  * No need to download other resources

* Player management (the car dealer job): billing, boss actions and more!
  * [esx_society](https://github.com/ESX-Org/esx_society)
  * [esx_billing](https://github.com/ESX-Org/esx_billing)
  * [esx_addonaccount](https://github.com/ESX-Org/esx_addonaccount)
  * [esx_addoninventory](https://github.com/ESX-Org/esx_addoninventory)
  * [cron](https://github.com/ESX-Org/cron)

## Download & Installation

### Using [fvm](https://github.com/qlaffont/fvm-installer)

```
fvm install --save --folder=esx esx-org/esx_vehicleshop
```

### Using Git

```
cd resources
git clone https://github.com/ESX-Org/esx_vehicleshop [esx]/esx_vehicleshop
```

### Manually

- Download https://github.com/ESX-Org/esx_vehicleshop/archive/master.zip
- Put it in the `[esx]` directory

### Installation

- Import `esx_vehicleshop.sql` in your database
- Add this in your `server.cfg`:

```
start esx_vehicleshop
```
- If you want player management you have to set `Config.EnablePlayerManagement` to `true` in `config.lua`

