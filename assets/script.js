const repo = 'FabiPunktExe/SimpleLauncher'

async function getWindowsInstaller() {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`)
    const json = await response.json()
    return json.assets[0]
}