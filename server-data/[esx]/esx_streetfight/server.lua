ESX = nil

local bluePlayerReady = false
local redPlayerReady = false
local fight = {}

TriggerEvent('esx:getSharedObject',
    function(obj)
        ESX = obj
    end
)

RegisterServerEvent('esx_streetfight:join')
AddEventHandler('esx_streetfight:join', function(betAmount, side)

        local _source = source
        local xPlayer = ESX.GetPlayerFromId(_source)

		if side == 0 then
			bluePlayerReady = true
		else
			redPlayerReady = true
		end

        local fighter = {
            id = source,
            amount = betAmount
        }
        table.insert(fight, fighter)

        balance = xPlayer.getAccount('money').money
        if (balance > betAmount) or betAmount == 0 then
            xPlayer.removeAccountMoney('money', betAmount)
            TriggerClientEvent('esx:showNotification', source, 'ti sei iscritto con successo')

            if side == 0 then
                TriggerClientEvent('esx_streetfight:playerJoined', -1, 1, source)
            else
                TriggerClientEvent('esx_streetfight:playerJoined', -1, 2, source)
            end

            if redPlayerReady and bluePlayerReady then 
                TriggerClientEvent('esx_streetfight:startFight', -1, fight)
            end

        else
            TriggerClientEvent('esx:showNotification', source, 'Non hai soldi')
        end
end)

local count = 240
local actualCount = 0
function countdown(copyFight)
    for i = count, 0, -1 do
        actualCount = i
        Citizen.Wait(1000)
    end

    if copyFight == fight then
        TriggerClientEvent('esx_streetfight:fightFinished', -1, -2)
        fight = {}
        bluePlayerReady = false
        redPlayerReady = false
    end
end

RegisterServerEvent('esx_streetfight:finishFight')
AddEventHandler('esx_streetfight:finishFight', function(looser)
       TriggerClientEvent('esx_streetfight:fightFinished', -1, looser)
       fight = {}
       bluePlayerReady = false
       redPlayerReady = false
end)

RegisterServerEvent('esx_streetfight:leaveFight')
AddEventHandler('esx_streetfight:leaveFight', function(id)
       if bluePlayerReady or redPlayerReady then
            bluePlayerReady = false
            redPlayerReady = false
            fight = {}
            TriggerClientEvent('esx_streetfight:playerLeaveFight', -1, id)
       end
end)

RegisterServerEvent('esx_streetfight:pay')
AddEventHandler('esx_streetfight:pay', function(amount)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    xPlayer.addAccountMoney('money', amount * 2)
end)

RegisterServerEvent('esx_streetfight:raiseBet')
AddEventHandler('esx_streetfight:raiseBet', function(looser)
       TriggerClientEvent('esx_streetfight:raiseActualBet', -1)
end)

RegisterServerEvent('esx_streetfight:showWinner')
AddEventHandler('esx_streetfight:showWinner', function(id)
       TriggerClientEvent('esx_streetfight:winnerText', -1, id)
end)