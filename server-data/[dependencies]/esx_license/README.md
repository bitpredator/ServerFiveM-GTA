# esx_license

## Installation
- Import `esx_license.sql` in your database
- Put it in the `[esx]` directory
- Add this to your `server.cfg`:

```
start esx_license
```

### Available triggers
- `'esx_license:addLicense', function(target, type, cb)`
- `'esx_license:removeLicense', function(target, type, cb)`
- `'esx_license:getLicense', function(source, cb, type)` (callback)
- `'esx_license:getLicenses', function(source, cb, target)` (callback)
- `'esx_license:checkLicense', function(source, cb, target, type)` (callback)
- `'esx_license:getLicensesList', function(source, cb)` (callback)
