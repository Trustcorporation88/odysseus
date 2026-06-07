# Cookbook Service

## Overview

**Cookbook** helps you:
1. Scan your hardware (CPU, RAM, GPU)
2. Get model recommendations
3. Download AI models with one click
4. Serve them locally (free!)
5. Use in Chat/Agent

No more wrestling with complex installations.

---

## Getting Started

1. Go to **Cookbook**
2. Click **Scan Hardware** (first time)
3. See recommendations
4. Click **Download** on a model
5. Wait for download
6. Click **Serve** when ready
7. Use in Chat!

---

## Scanning Hardware

**Cookbook → Scan Hardware**

Odysseus checks:
- ✅ Total RAM
- ✅ Available RAM
- ✅ CPU cores
- ✅ GPU (NVIDIA/AMD/Intel)
- ✅ GPU VRAM

This determines which models you can run efficiently.

---

## Model Recommendations

### VRAM Needed

| Model Size | VRAM | RAM | GPU? |
|-----------|------|-----|------|
| 7B | 6GB | 8-16GB | Optional |
| 13B | 10GB | 16-32GB | Optional |
| 70B | 48GB | 64GB+ | Required |

### Recommendations

Based on your hardware:
- 🟢 **Can run** — green light, good choice
- 🟡 **Can run** — yellow, may be slow
- 🔴 **Can't run** — red, need more RAM

### Quality Tiers

- **Full precision** — best quality, needs GPU
- **AWQ/FP8** — good quality, quantized
- **GGUF** — efficient, lightweight

Start with GGUF for your first model!

---

## Downloading Models

1. Click **Download** button
2. Select format (GGUF recommended)
3. Wait (1-5 minutes per model)
4. Check downloads progress

Models stored in `data/models/`

### Popular Models

**Fast & Light:**
- `mistral-7b` — quick, smart
- `neural-chat-7b` — chat optimized
- `dolphin-2.6-mixtral-8x7b` — creative

**Balanced:**
- `llama2-13b` — popular, reliable
- `openchat-3.5` — good all-rounder

**Powerful:**
- `llama2-70b` — best quality
- `code-llama` — coding specialist

---

## Serving Models

### Start Serving
1. Click **Serve** button
2. Starts Ollama server
3. Model loads in background
4. Ready when shows "Online"

### Multiple Models
- Serve multiple at once
- Switch between them in Chat
- Ollama manages resources
- Only one active at a time

### Stop Serving
- Click **Stop** button
- Frees up RAM/GPU
- Can restart anytime

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Won't start | Check RAM available |
| Very slow | Try smaller model |
| Crashes | OOM (out of memory), need more RAM |
| Connection timeout | Restart Odysseus |

---

## Model Configuration

### Advanced Settings

**Cookbook → Model Settings**

- **Quantization** — GGUF, FP8, AWQ
- **Context length** — max tokens
- **GPU layers** — offload to GPU

### Performance Tuning

- Reduce context length (faster)
- Quantize to AWQ (smaller)
- Use 8x7B MoE (faster than 13B)
- Enable GPU offloading

---

## Cookbook vs Online APIs

### Local (Cookbook) ✅
- 💰 Free (after model download)
- 🔒 Private, no tracking
- 📶 Works offline
- 🚀 Instant responses
- ⚙️ Full control

### Online APIs ❌
- 💰 Cost per use
- 👁️ Company sees your data
- 🌐 Needs internet
- ⏱️ Network latency
- 📊 Usage limits

**Recommendation:** Use Cookbook + one local model!

---

## Dependency Management

**Cookbook → Dependencies**

Install support libraries:
- **llama-cpp-python** — local model serving
- **CUDA/ROCm** — GPU acceleration
- **Weights & Biases** — model monitoring

---

## GPU Support

### NVIDIA
Requirements:
- NVIDIA GPU (RTX 3060+)
- CUDA drivers installed
- 6GB+ VRAM

**Enable in Settings → GPU**

### AMD ROCm
Requirements:
- AMD GPU (5700 XT+)
- ROCm drivers installed
- 6GB+ VRAM

### Mac Metal
- Auto-detected on macOS
- Uses Apple Silicon acceleration
- No config needed

---

## Best Practices

1. **Start small**
   - Download 7B model first
   - Test performance
   - Upgrade if needed

2. **Monitor resources**
   - Watch RAM/GPU usage
   - Adjust quantization if slow
   - Stop unused models

3. **Keep updated**
   - New versions released weekly
   - Check Cookbook for updates
   - Backup working models

4. **Test before using**
   - Ask test questions
   - Verify quality
   - Adjust settings if needed

---

## Advanced

### Build Models
Cookbook can build models from source:
- `llama.cpp` — compile locally
- Custom quantization
- Research models

### Model Hub Integration
- HuggingFace integration
- Model cards & ratings
- Community recommendations

---

## See Also

- [Chat Service](./chat.md) — Use models in chat
- [Settings](./settings.md) — Configure defaults
- [FAQ - Hardware](../FAQ.md#hardware) — More on hardware
