Config                            = {}

Config.ReviveReward               = 700  -- Revive reward, set to 0 if you don't want it enabled

Config.Locale                     = 'it'

Config.EarlyRespawnTimer          = 2 * 10  -- time til respawn is available
Config.BleedoutTimer              = 2 * 100 -- time til the player bleeds out

Config.RemoveWeaponsAfterRPDeath  = false
Config.RemoveCashAfterRPDeath     = false
Config.RemoveItemsAfterRPDeath    = false

-- Let the player pay for respawning early, only if he can afford it.
Config.EarlyRespawnFine           = false
Config.EarlyRespawnFineAmount     = 5000

Config.OxInventory                = ESX.GetConfig().OxInventory
Config.RespawnPoints = {
	{coords = vector3(341.0, -1397.3, 32.5), heading = 48.5}
}

Config.Hospitals = {

	CentralLosSantos = {

		Blip = {
			coords = vector3(307.7, -1433.4, 28.9),
			sprite = 61,
			scale  = 1.2,
			color  = 2
		}

	}
}
