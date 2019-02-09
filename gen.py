branches = ["master", "demo4", "demo3", "demo2", "kevin-serverstuff", "ryanchat2", "adminpage", "laser_visual", "lobby", "chatimprovements"]

with open("git.switch.sh", "w") as out:
	for branch in branches:
		out.write("git checkout " + str(branch) + " && git push origin " + str(branch) + "\n")