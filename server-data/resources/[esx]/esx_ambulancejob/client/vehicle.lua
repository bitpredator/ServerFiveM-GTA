CreateThread(function()
	while true do
		sleep = 1500

		if isInShopMenu then
			sleep = 0
			DisableControlAction(0, 75, true)  -- Disable exit vehicle
			DisableControlAction(27, 75, true) -- Disable exit vehicle
		end
		Wait(sleep)
	end
end)

